package io.agileintelligence.fsbasics1backend.service;

import io.agileintelligence.fsbasics1backend.model.ProjectTask;

public interface ProjectTaskService<MODEL> {

    Iterable findAll();

    MODEL findById(Long id);

    MODEL save(MODEL model);

    MODEL update (MODEL model);

    void delete (Long id);
}
