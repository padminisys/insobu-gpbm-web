package com.padminisys.insobu.core.dal.repositories;

import com.padminisys.insobu.core.dal.entities.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CustomerRepository extends JpaRepository<CustomerEntity, UUID> {

}
