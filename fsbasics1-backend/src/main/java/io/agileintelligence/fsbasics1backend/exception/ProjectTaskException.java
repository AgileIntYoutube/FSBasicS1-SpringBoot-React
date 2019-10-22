package io.agileintelligence.fsbasics1backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ProjectTaskException extends RuntimeException {
    public ProjectTaskException(String message) {
        super(message);
    }
}
