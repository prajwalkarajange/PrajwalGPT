//package com.telusko.SpringAICode.controller;
//
//import java.util.Map;
//
//import org.springframework.ai.chat.client.ChatClient;
//import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
//import org.springframework.ai.chat.memory.ChatMemory;
//import org.springframework.ai.chat.memory.MessageWindowChatMemory;
//import org.springframework.ai.chat.prompt.Prompt;
//import org.springframework.ai.chat.prompt.PromptTemplate;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api")
//public class GeminiController {
//
//    private final ChatClient chatClient;
//
//    public GeminiController(ChatClient.Builder builder) {
//
//        ChatMemory chatMemory = MessageWindowChatMemory.builder()
//                .build();
//
//        this.chatClient = builder
//                .defaultAdvisors(
//                        MessageChatMemoryAdvisor.builder(chatMemory)
//                                .build()
//                )
//                .build();
//    }
//
//    @GetMapping("/{message}")
//    public ResponseEntity<String> chat(@PathVariable String message) {
//
//        String response = chatClient.prompt()
//                .user(message)
//                .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, "default"))
//                .call()
//                .content();
//
//        return ResponseEntity.ok(response);
//    }
//
//    @PostMapping("/recommend")
//    public ResponseEntity<String> recommend(
//            @RequestParam String type,
//            @RequestParam String year,
//            @RequestParam String lang) {
//
//        String template = """
//                I want to watch a {type} movie with a good rating.
//                Looking for movies around the year {year}.
//                The language should be {lang}.
//                Suggest one specific movie.
//                Also provide:
//                - Cast
//                - Director
//                - Runtime
//                - IMDb Rating
//                - A short summary
//                """;
//
//        PromptTemplate promptTemplate = new PromptTemplate(template);
//
//        Prompt prompt = promptTemplate.create(
//                Map.of(
//                        "type", type,
//                        "year", year,
//                        "lang", lang
//                )
//        );
//
//        String response = chatClient.prompt(prompt)
//                .call()
//                .content();
//
//        return ResponseEntity.ok(response);
//    }
//}