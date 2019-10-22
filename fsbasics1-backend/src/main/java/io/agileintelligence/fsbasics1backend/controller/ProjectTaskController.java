package io.agileintelligence.fsbasics1backend.controller;


import io.agileintelligence.fsbasics1backend.model.ProjectTask;
import io.agileintelligence.fsbasics1backend.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/backlog") //Research backlog in the context of Agile (Scrum)
public class ProjectTaskController {

    /*
    Set up an end point to be able to create a ProjectTask in the DB

     */

    private ProjectTaskRepository projectTaskRepository;

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


}
