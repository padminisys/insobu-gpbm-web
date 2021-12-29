package com.padminisys.insobu.core.dal.entities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.UUID;


@Data
@Entity
@Table(name = "Users")
public class UserEntity {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(updatable = false, nullable = false, unique = true)
    private UUID id;

    private String name;

    @Column(nullable = false, unique = true)
    private String userName;

    @Lob
    private byte[] profileImage;
    private String password;
    private String gender;
    private LocalDate dateOfBirth;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String email;
    private String mobile;
    private boolean enabled;
    private Timestamp lastLogin;
    private Timestamp createdAt;
    private String createdBy;
    private Timestamp modifiedAt;
    private String modifiedBy;
}
