package com.padminisys.insobu.core;

import com.padminisys.insobu.core.dal.entities.UserEntity;
import com.padminisys.insobu.core.dal.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDate;

@SpringBootTest
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
class InsobuGpbmWebApplicationTests {

    private final UserRepository userRepository;

    @Test
    @Disabled
    void contextLoads() {
        UserEntity userEntity = new UserEntity();
        userEntity.setAddress("305 C Galaxy Height, SV Road, Kandivali West");
        userEntity.setCity("Mumbai");
        userEntity.setCreatedAt(Timestamp.from(Instant.now()));
        userEntity.setCreatedBy("SYSTEM");
        userEntity.setEmail("manish@dressdesigner.com");
        userEntity.setEnabled(true);
        userEntity.setDateOfBirth(LocalDate.of(1985, 11, 5));
        userEntity.setGender("Male");
        userEntity.setMobile("9004481082");
        userEntity.setZipCode("400065");
        userEntity.setUserName("manish");
        userEntity.setState("Maharashtra");
        userEntity.setPassword("manish");
        userEntity.setLastLogin(null);
        userEntity.setName("Manish");
        userEntity.setModifiedAt(Timestamp.from(Instant.now()));
        userEntity.setModifiedBy("SYSTEM");
        userRepository.save(userEntity);
    }
}