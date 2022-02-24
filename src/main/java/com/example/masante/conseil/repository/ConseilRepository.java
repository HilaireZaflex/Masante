package com.example.masante.conseil.repository;

import com.example.masante.conseil.entity.Conseil;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConseilRepository extends JpaRepository <Conseil, Long> {
}
