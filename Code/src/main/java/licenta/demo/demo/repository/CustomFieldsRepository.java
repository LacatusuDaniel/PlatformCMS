package licenta.demo.demo.repository;

import licenta.demo.demo.entity.CustomFields;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomFieldsRepository extends JpaRepository<CustomFields,Integer> {
    @Query("SELECT c FROM CustomFields c WHERE c.groupId=?1")
    List<CustomFields> CustomFieldsGroupByGroupId(Integer groupId);
}

