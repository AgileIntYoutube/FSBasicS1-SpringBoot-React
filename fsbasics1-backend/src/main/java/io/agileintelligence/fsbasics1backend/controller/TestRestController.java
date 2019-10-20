package io.agileintelligence.fsbasics1backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Import Shift + Cmd OR Ctrl + o

//Help -> Show active keybindings

@RestController
public class TestRestController {
	
	@GetMapping
	public String testSpringBoot() {
		return "Test Spring boot";
	}

}
