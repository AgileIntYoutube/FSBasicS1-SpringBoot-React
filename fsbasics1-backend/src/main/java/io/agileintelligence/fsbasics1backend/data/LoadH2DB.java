package io.agileintelligence.fsbasics1backend.data;

import io.agileintelligence.fsbasics1backend.model.ProjectTask;
import io.agileintelligence.fsbasics1backend.repository.ProjectTaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class LoadH2DB {
    /*
    WARNING: This works with H2 because every time that your restart the application, the DB gets wiped out
    if you do not decommission this when using MySQL, you will persists duplicates every time that you restart
    your application during development

     */
    @Bean
    CommandLineRunner loadTestData(ProjectTaskRepository projectTaskRepository){
        return args -> {
            projectTaskRepository.save(new ProjectTask("UserStory", "sample story","sample description","IN_PROGRESS"));
            projectTaskRepository.save(new ProjectTask("Task", "sample task","sample description for Task","TO_DO"));
            projectTaskRepository.save(new ProjectTask("Bug", "sample but","sample description for a Bug","DONE"));
        };
    }
}
