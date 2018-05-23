package com.cihangirmercan.springbootmongoreact;

import java.util.ArrayList;
import java.util.List;

import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import com.mongodb.BasicDBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientOptions;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@Service
public class MongoDbService {
	// for using mongo with java objects
	private final CodecRegistry pojoCodecRegistry = CodecRegistries.fromRegistries(
			MongoClient.getDefaultCodecRegistry(), CodecRegistries.fromProviders(
					PojoCodecProvider.builder().automatic(true).build()));
	
	// this service comes from mLab (https://www.mlab.com/databases/heroku_pt2m6rn8)
	private final MongoCredential credential = MongoCredential
			.createCredential("springuser", "heroku_pt2m6rn8", "springuser".toCharArray());

	/*
	 * public MongoClient(ServerAddress addr,
               	   MongoCredential credential,
                   MongoClientOptions options)
	 */
	private final MongoClient mongoClient = new MongoClient(
			new ServerAddress("ds231460.mlab.com:31460"),
			credential,
			MongoClientOptions.builder()
				.codecRegistry(pojoCodecRegistry)
				.build());

	private final MongoDatabase database = mongoClient.getDatabase("heroku_pt2m6rn8");

	private final MongoCollection<Todo> collection = database.getCollection("todo", Todo.class);
	
	// methods below
	public List<Todo> getTodos() {
		List<Todo> todos = collection.find().into(new ArrayList<Todo>());
		
		for (int i = 0; i < todos.size(); i++) {
			Todo temp = todos.get(i);
			temp.setHexId(temp.getId().toHexString());
			todos.set(i, temp);
		}
		
		return todos;
	}

	public void addTodo(Todo todo) {
		collection.insertOne(todo);	
	}
	
	public Todo getTodo(String id) {
		BasicDBObject query = new BasicDBObject();
	    query.put("_id", new ObjectId(id));
	    
	    Todo todo = collection.find(query).first();
	    todo.setHexId(todo.getId().toHexString());
	    return todo;
	}
	
	public void deleteTodo(String id) {
		BasicDBObject query = new BasicDBObject();
	    query.put("_id", new ObjectId(id));
	    
	    collection.findOneAndDelete(query);
	}
	
	public void updateTodo(String id, Todo todo) {
		BasicDBObject query = new BasicDBObject();
	    query.put("_id", new ObjectId(id));
	    
	    collection.findOneAndReplace(query, todo);
	}
}
