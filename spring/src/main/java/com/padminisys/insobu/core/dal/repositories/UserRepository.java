package com.padminisys.insobu.core.dal.repositories;

import com.padminisys.insobu.core.dal.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<UserEntity, UUID> {

}
