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

	@GetMapping("/queryp")
	public String queryParam(@RequestParam(value="whatever")String reqParam){
		return reqParam;
	}

	@GetMapping("/{pv}/pathv")
	public String pathVar(@PathVariable String pv){
		return pv;
	}

	@GetMapping("/pathv/{pv}")
	public String pathVar2(@PathVariable String pv){
		return pv;
	}

}
