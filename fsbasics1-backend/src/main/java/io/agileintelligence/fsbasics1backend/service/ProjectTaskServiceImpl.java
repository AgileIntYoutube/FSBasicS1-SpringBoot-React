package io.agileintelligence.fsbasics1backend.service;

import io.agileintelligence.fsbasics1backend.exception.ProjectTaskException;
import io.agileintelligence.fsbasics1backend.model.ProjectTask;
import io.agileintelligence.fsbasics1backend.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskServiceImpl implements ProjectTaskService<ProjectTask> {

    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    public ProjectTaskServiceImpl(ProjectTaskRepository projectTaskRepository) {
        this.projectTaskRepository = projectTaskRepository;
    }

    @Override
    public Iterable findAll() {
        return projectTaskRepository.findAll();
    }

    @Override
    public ProjectTask findById(Long id) {
        return projectTaskRepository.findById(id)
                .orElseThrow(()-> new ProjectTaskException("Project Task not found"));
    }

    @Override
    public ProjectTask save(ProjectTask projectTask) {
        return projectTaskRepository.save(projectTask);
    }

    @Override
    public ProjectTask update(ProjectTask projectTask) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
