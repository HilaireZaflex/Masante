package com.example.masante.repository;


import com.example.masante.entity.Maladie;
import com.example.masante.enumeration.Etat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface MaladieRepository extends JpaRepository <Maladie, Long> {


    @Query(value = "SELECT maladie FROM Maladie  maladie WHERE maladie.etat = '0'")
    List<Maladie> getAllMaladieActive();

    @Query( value = "SELECT maladie FROM Maladie  maladie WHERE maladie.etat = '1'")
    List<Maladie>getAllMaladieInactive();

    @Query(value ="SELECT maladie FROM Maladie  maladie WHERE maladie.id = :id AND maladie.etat =:etat")
    Maladie getMaladieByIdAndEtat(Long id, Etat etat);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Maladie SET etat='1' WHERE id=:id")
    Void disableMaladie(Long id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Maladie SET etat='0' WHERE id=:id")
    Void enableMaladie(Long id);

}
