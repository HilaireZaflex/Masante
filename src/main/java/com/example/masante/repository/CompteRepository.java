package com.example.masante.repository;

import com.example.masante.entity.Compte;
import com.example.masante.entity.Medecin;
import com.example.masante.entity.Utilisateur;
import com.example.masante.enumeration.Etat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@CrossOrigin("*")
public interface CompteRepository extends JpaRepository <Compte, Long>{

    Optional<Compte> findByMobileAndMotDePasse(Integer mobile, Integer motDePasse);


    @Query(value = "SELECT compte FROM Compte  compte WHERE compte.etat = 'ACTIVE'")
    List<Compte>getAllCompteActive();

    @Query( value = "SELECT compte FROM Compte compte WHERE compte.etat = 'INACTIVE'")
    List<Compte>getAllCompteInactive();

    @Query(value ="SELECT compte FROM Compte compte WHERE compte.id = :id AND compte.etat =:etat")
    Compte getCompteByIdAndEtat(Long id, Etat etat);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Compte SET etat='INACTIVE' WHERE id=:id")
    Void disableCompte(Long id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Compte SET etat='ACTIVE' WHERE id=:id")
    Void enableCompte(Long id);

    //---------------Medecin----------------//
    @Query(value = "SELECT med FROM Medecin med")
    List<Medecin> getAllMedecin();

    @Query(value ="SELECT med FROM Medecin med WHERE med.id = :id AND med.etat =:etat")
    Medecin getMedecinByIdAndEtat(Long id, Etat etat);

    @Query(value = "SELECT med FROM Medecin med WHERE med.etat = 'ACTIVE'")
    List<Medecin>getAllMedecinActive();

    @Query( value = "SELECT med FROM Medecin med WHERE med.etat = 'INACTIVE'")
    List<Medecin>getAllMedecinInactive();

    //---------------Utilisateur---------------//
    @Query(value = "SELECT user FROM Utilisateur user")
    List<Utilisateur> getAllUtilisateur();

    @Query(value ="SELECT user FROM Utilisateur user WHERE user.id = :id AND user.etat =:etat")
    Utilisateur getUtilisateurByIdAndEtat(Long id, Etat etat);

    @Query(value = "SELECT user FROM Utilisateur user WHERE user.etat = 'ACTIVE'")
    List<Utilisateur>getAllUtilisateurActive();

    @Query( value = "SELECT user FROM Utilisateur user WHERE user.etat = 'INACTIVE'")
    List<Utilisateur>getAllUtilisateurInactive();



}
