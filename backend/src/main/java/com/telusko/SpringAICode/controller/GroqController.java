package com.telusko.SpringAICode.controller;

import java.util.Map;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
import org.springframework.ai.chat.client.advisor.SimpleLoggerAdvisor;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.ai.chat.memory.MessageWindowChatMemory;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class GroqController {

    private final ChatClient chatClient;

    public GroqController(ChatClient.Builder builder) {

        this.chatClient = builder
                .defaultAdvisors(
                        MessageChatMemoryAdvisor.builder(
                                MessageWindowChatMemory.builder()
                                        .build()
                        ).build(),
                        new SimpleLoggerAdvisor()
                )
                .build();
    }

    // Chat Endpoint
    @GetMapping("/{conversationId}/{message}")
    public String chat(
            @PathVariable String conversationId,
            @PathVariable String message) {

        return chatClient.prompt()
                .user(message)
                .advisors(a ->
                        a.param(ChatMemory.CONVERSATION_ID, conversationId))
                .call()
                .content();
    }

    // Movie Recommendation Endpoint
    @PostMapping("/{conversationId}/recommend")
    public String recommend(
            @PathVariable String conversationId,
            @RequestParam String type,
            @RequestParam String year,
            @RequestParam String lang) {

        PromptTemplate template = new PromptTemplate("""
                Suggest me 5 movies.

                Genre: {type}

                Release Year: {year}

                Language: {lang}

                Also include:
                - IMDb Rating
                - Director
                - Short Story
                """);

        Prompt prompt = template.create(Map.of(
                "type", type,
                "year", year,
                "lang", lang
        ));

        return chatClient.prompt(prompt)
                .advisors(a ->
                        a.param(ChatMemory.CONVERSATION_ID, conversationId))
                .call()
                .content();
    }
}