package io.agileintelligence.fsbasics1backend.repository;

import io.agileintelligence.fsbasics1backend.model.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
//https://resources.jetbrains.com/storage/products/intellij-idea/docs/IntelliJIDEA_ReferenceCard.pdf
@Repository
public interface ProjectTaskInterface extends CrudRepository <ProjectTask, Long> {

}
