package com.cihangirmercan.springbootmongoreact;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {
	
	@Autowired
	MongoDbService mongoService;
	
	@GetMapping("/api/todos")
	public List<Todo> getTodos() {
		return mongoService.getTodos();
	}
	
	@PostMapping(value = "/api/todos")
	@ResponseStatus(value = HttpStatus.OK)
	public void addTodo(@RequestBody Todo todo) {
		mongoService.addTodo(todo);
	}
	
	@GetMapping(value = "/api/todos/{id}")
	public Todo getTodo(@PathVariable String id) {
		return mongoService.getTodo(id);
	}
	
	@DeleteMapping(value = "/api/todos/{id}")
	@ResponseStatus(value = HttpStatus.OK)
	public void deleteTodo(@PathVariable String id) {
		mongoService.deleteTodo(id);
	}
	
	@PutMapping(value = "/api/todos/{id}")
	@ResponseStatus(value = HttpStatus.OK)
	public void updateTodo(@PathVariable String id, @RequestBody Todo todo) {
		mongoService.updateTodo(id, todo);
	}
}
