package licenta.demo.demo;

import licenta.demo.demo.controller.PagesController;
import licenta.demo.demo.repository.PagesRepository;
import licenta.demo.demo.security.WebSecurityConfig;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Collections;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes= PagesRepository.class)
@WebMvcTest(value = PagesRepository.class)
@Import(WebSecurityConfig.class)
class DemoApplicationTests {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    PagesRepository pagesRepository;

    @Test
    void contextLoads() throws Exception {
        when(pagesRepository.findAll()).thenReturn(
                Collections.emptyList()
        );

        MvcResult mvcResult=mockMvc.perform(
                MockMvcRequestBuilders.get("/pages/all")
                        .accept(MediaType.APPLICATION_JSON)
        ).andReturn();

        System.out.println(mvcResult.getResponse());


        verify(pagesRepository).findAll();
    }

}
