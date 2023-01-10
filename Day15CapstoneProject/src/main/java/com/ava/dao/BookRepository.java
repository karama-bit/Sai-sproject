package com.ava.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ava.model.LibrayBook;

public interface BookRepository extends JpaRepository<LibrayBook,Integer> {
	

}
