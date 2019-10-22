package io.agileintelligence.fsbasics1backend.controller;


import io.agileintelligence.fsbasics1backend.exception.ProjectTaskException;
import io.agileintelligence.fsbasics1backend.model.ProjectTask;
import io.agileintelligence.fsbasics1backend.repository.ProjectTaskRepository;
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

    private final ProjectTaskRepository projectTaskRepository;

    @Autowired //If you have more than 1 constructor
    //https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/reference/html/using-spring-boot.html#using-boot-spring-beans-and-dependency-injection
    public ProjectTaskController(ProjectTaskRepository projectTaskRepository) {
        this.projectTaskRepository = projectTaskRepository;
    }



    @PostMapping
    public ResponseEntity createProjectTask(@RequestBody ProjectTask projectTask){
        //Explain request body at the end
        //Save to the DB
        //return the saved object with a status code response of 200 (OK)
        //return new ResponseEntity(projectTaskRepository.save(projectTask), HttpStatus.CREATED)
        return ResponseEntity.created(URI.create("/backlog")).body(projectTaskRepository.save(projectTask));
    }

    @GetMapping
    public ResponseEntity findAllPTs(){
        return ResponseEntity.ok().body(projectTaskRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity findPTById(@PathVariable Long id){
        ProjectTask task = projectTaskRepository.findById(id)
                .orElseThrow(()-> new ProjectTaskException("Project Task not found"));
        return ResponseEntity.ok(task);
    }

    //too much logic in the controller


}
