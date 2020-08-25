package licenta.demo.demo;

import licenta.demo.demo.repository.UsersRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UsersRepository.class)
public class RestApplication {


    public static void main(String[] args) {
        SpringApplication.run(RestApplication.class, args);
    }


}
