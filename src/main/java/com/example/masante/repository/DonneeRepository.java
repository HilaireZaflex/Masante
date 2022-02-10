package com.example.masante.repository;

import com.example.masante.entity.Donnee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonneeRepository extends JpaRepository <Donnee, Long> {
}
