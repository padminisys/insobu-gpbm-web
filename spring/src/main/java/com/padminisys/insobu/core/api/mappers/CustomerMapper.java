package com.padminisys.insobu.core.api.mappers;


import com.padminisys.insobu.core.api.model.Customer;
import com.padminisys.insobu.core.dal.entities.CustomerEntity;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface CustomerMapper {
    CustomerEntity customerToCustomerEntity(Customer customer);
}
