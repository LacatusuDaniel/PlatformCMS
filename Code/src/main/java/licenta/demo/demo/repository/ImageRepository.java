package licenta.demo.demo.repository;

import licenta.demo.demo.entity.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
}
