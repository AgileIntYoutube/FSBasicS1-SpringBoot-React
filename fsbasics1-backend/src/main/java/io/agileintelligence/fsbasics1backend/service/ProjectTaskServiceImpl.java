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
    public ProjectTask update(Long id, ProjectTask projectTask) {

        return projectTaskRepository.findById(id).map(
                itemInDB -> {
                    projectTask.setId(itemInDB.getId());
                    itemInDB = projectTask;
                    return projectTaskRepository.save(itemInDB);
                }
        ).orElseGet(()->{
            return projectTaskRepository.save(projectTask);
        });
    }

    /**
     * @Request: Bell IT implemented these changes pending analysis, design, and impact analysis
     * @Date_Of_Implementation: Oct xx, 20xx
     * @Implemented_By: Carlos
     * @Risks: Unknown, pending additional testing
     * @Scope: This change is not in scope of our current mandate /SOW
     * @param id
     */
    @Override
    public void delete(Long id) {
        ProjectTask projectTask = projectTaskRepository.findById(id)
                .orElseThrow(()-> new ProjectTaskException("Project Task not found"));
        projectTaskRepository.delete(projectTask);
    }
}
