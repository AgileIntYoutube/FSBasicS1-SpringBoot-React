package io.agileintelligence.fsbasics1backend.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

//Import Shift + Cmd OR Ctrl + o

//Help -> Show active keybindings
 
@RestController
@RequestMapping("/sampleroute")
public class TestRestController {
	
	@GetMapping("/iroute")
	public String testSpringBoot() {
		return "Test Spring boot";
	}

}
