package com.padminisys.insobu.core.api.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.UUID;

@Data
public class Customer {
    private UUID id;
    private String name;
    private String gender;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String email;
    private String mobile;

    @JsonFormat(pattern = "yyyy-MM-dd@HH:mm:ss")
    private Timestamp createdAt;
    private String createdBy;

    @JsonFormat(pattern = "yyyy-MM-dd@HH:mm:ss")
    private Timestamp modifiedAt;
    private String modifiedBy;
}
