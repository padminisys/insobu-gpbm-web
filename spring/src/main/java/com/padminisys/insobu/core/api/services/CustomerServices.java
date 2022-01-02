package com.padminisys.insobu.core.api.services;

import com.padminisys.insobu.core.api.mappers.CustomerMapper;
import com.padminisys.insobu.core.api.model.Customer;
import com.padminisys.insobu.core.dal.entities.CustomerEntity;
import com.padminisys.insobu.core.dal.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.sql.Timestamp;
import java.time.Instant;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("customer")
public class CustomerServices {

    private final CustomerRepository customerRepository;
    private final CustomerMapper customerMapper;

    @RolesAllowed("user")
    @PostMapping("create")
    public @ResponseBody
    CustomerEntity createCustomer(@RequestBody Customer customer) {
        Timestamp indiaTime = Timestamp.from(Instant.now());
        CustomerEntity customerEntity = customerMapper.customerToCustomerEntity(customer);
        customerEntity.setModifiedAt(indiaTime);
        customerEntity.setCreatedAt(indiaTime);
        customerEntity.setCreatedBy("SYSTEM");
        customerEntity.setModifiedBy("SYSTEM");
        CustomerEntity savedCustomerEntity = customerRepository.save(customerEntity);
        log.info("Customer record created in the system {} ", savedCustomerEntity);
        return savedCustomerEntity;
    }
}
