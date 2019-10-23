package io.agileintelligence.fsbasics1backend.controller;


import io.agileintelligence.fsbasics1backend.exception.ProjectTaskException;
import io.agileintelligence.fsbasics1backend.model.ProjectTask;
import io.agileintelligence.fsbasics1backend.repository.ProjectTaskRepository;
import io.agileintelligence.fsbasics1backend.service.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/backlog") //Research backlog in the context of Agile (Scrum)
public class ProjectTaskController {

    /*
    Set up an end point to be able to create a ProjectTask in the DB

     */

   private final ProjectTaskService projectTaskService;

//   @Autowired
    public ProjectTaskController(ProjectTaskService projectTaskService) {
        this.projectTaskService = projectTaskService;
    }

    @PostMapping
    public ResponseEntity createProjectTask(@RequestBody ProjectTask projectTask){
        //Explain request body at the end
        //Save to the DB
        //return the saved object with a status code response of 200 (OK)
        //return new ResponseEntity(projectTaskRepository.save(projectTask), HttpStatus.CREATED)
        return ResponseEntity.created(URI.create("/backlog")).body(projectTaskService.save(projectTask));
    }

    @GetMapping
    public ResponseEntity findAllPTs(){
        return ResponseEntity.ok().body(projectTaskService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity findPTById(@PathVariable Long id){
        return ResponseEntity.ok(projectTaskService.findById(id));
    }

    //too much logic in the controller


}
