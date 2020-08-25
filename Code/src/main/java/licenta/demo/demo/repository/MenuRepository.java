package licenta.demo.demo.repository;

import licenta.demo.demo.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<Menu,Integer> {
}
