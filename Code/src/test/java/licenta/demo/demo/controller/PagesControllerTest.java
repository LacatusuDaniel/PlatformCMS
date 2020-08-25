package licenta.demo.demo.controller;

import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringJUnit4ClassRunner.class)
public class PagesControllerTest {

    private MockMvc mockMvc;

    @InjectMocks
    private PagesController pagesController;

    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(pagesController).build();
    }

    @Test
    public void testPagesController() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/pages/all")
        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.pageTitle", Matchers.is("titlu")))
                .andExpect(jsonPath("$.pageContent", Matchers.is("continut")));
    }
}
