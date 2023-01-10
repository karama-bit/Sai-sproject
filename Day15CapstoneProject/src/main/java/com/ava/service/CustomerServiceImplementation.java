package com.ava.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ava.dao.BookRepository;
import com.ava.dao.CustomerRepository;
import com.ava.model.Customer;
import com.ava.model.LibrayBook;

@Service
public class CustomerServiceImplementation implements CustomerService {

	
	@Autowired
	CustomerRepository customerRepo;
	
	@Autowired
	BookRepository bookRepo;
	
	@Override
	public List<Customer> getAllCustomers() {
		return customerRepo.findAll();
	}

	@Override
	public Customer insertCustomer(Customer customer,int bookId) {
		LibrayBook book = bookRepo.findById(bookId).get();
		book.setStatus("Borrowed");
		bookRepo.save(book);
		return customerRepo.save(customer);
	}
	
	@Override
	public Customer insertBuyer(Customer customer,int bookId) {
		LibrayBook book = bookRepo.findById(bookId).get();
		book.setStatus("Sold");
		bookRepo.save(book);
		return customerRepo.save(customer);
	}
	
	
	
}
