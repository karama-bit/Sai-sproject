package com.ava.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ava.model.Customer;


public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
