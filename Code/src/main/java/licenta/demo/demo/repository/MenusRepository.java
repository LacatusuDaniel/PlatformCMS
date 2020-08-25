package licenta.demo.demo.repository;

import licenta.demo.demo.dto.MenuPagDto;
import licenta.demo.demo.entity.Menus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MenusRepository extends JpaRepository<Menus,Integer> {
    @Query("SELECT new licenta.demo.demo.dto.MenuPagDto(p.pageId, p.pageTitle, p.pageContent, m.orderId) "
            + "FROM Pages p INNER JOIN Menus m ON p.pageId=m.pageId ORDER BY m.orderId")
    List<MenuPagDto> fetchMenuPagDataInnerJoin();

}
