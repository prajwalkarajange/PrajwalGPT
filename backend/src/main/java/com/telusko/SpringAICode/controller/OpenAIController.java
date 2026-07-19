//package com.telusko.SpringAICode.controller;
//
//import org.springframework.ai.chat.client.ChatClient;
//import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
//import org.springframework.ai.chat.memory.ChatMemory;
//import org.springframework.ai.chat.memory.MessageWindowChatMemory;
//import org.springframework.ai.chat.prompt.Prompt;
//import org.springframework.ai.chat.prompt.PromptTemplate;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.ai.chat.memory.ChatMemory;
//
//import java.util.Map;
//
//@RestController
//public class OpenAIController {
//
//
//    private final ChatClient chatClient;
//
//    public OpenAIController(ChatClient.Builder builder) {
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
//    @GetMapping("/api/{message}")
//    public ResponseEntity<String> getAnswer(@PathVariable String message) {
//
//
//        String response = chatClient
//                .prompt()
//                .user(message)
//                .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, "default"))
//                .call()
//                .content();
//
//        return ResponseEntity.ok(response);
//    }
//
//    @PostMapping("/api/recommand")
//    public String recommand(@RequestParam String type,@RequestParam String year, @RequestParam String lang){
//
//        String tempt= """
//                I want to watch a {type} movie with good rating,
//                looking for movies around this year {year},
//                The language i am looking for is {lang},
//                Suggest one specific movie and tell me the cast and length
//                """;
//        PromptTemplate promptTemplate=new PromptTemplate(tempt);
//        Prompt prompt=promptTemplate.create(Map.of("type",type,"year",year,"lang",lang));
//
//        String response =chatClient.prompt(prompt).call().content();
//
//        return response;
//    }
//}
