package com.ava.service;

import java.util.List;

import com.ava.model.LibrayBook;

public interface BookService {

	LibrayBook findById(int id);

	List<LibrayBook> getAllBooks();

	void removeBookById(int id);

	void removeBookAll();

	LibrayBook updateBookById(LibrayBook book, int id);

	LibrayBook insertBook(LibrayBook book);



}