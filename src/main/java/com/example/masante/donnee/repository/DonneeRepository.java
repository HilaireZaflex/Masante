package com.example.masante.donnee.repository;


import com.example.masante.donnee.entity.Donnee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DonneeRepository extends JpaRepository <Donnee, Long> {
    @Query("SELECT donnee FROM Donnee donnee WHERE donnee.id = (SELECT MAX(id) FROM Donnee )")
    List <Donnee> dernierDonnee();
}
