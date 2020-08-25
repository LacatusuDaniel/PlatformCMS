package licenta.demo.demo.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="userid")
    private Integer userId;
    @Column(name="username")
    private String username;
    @Column(name="password")
    private String password;
    @Column(name="email")
    private String email;
    @Column(name="status")
    private String status;


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    @Value("ROLE_USER")
    private Set<Role> roles = new HashSet<>();

//    @JsonManagedReference
    @OneToMany(mappedBy = "users")
    private List<Pages> pages;


    public Users() {

    }

    public Users( String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }


    public Users(String username, String password, String email, String status, Set<Role> roles, List<Pages> pages) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.status = status;
        this.roles = roles;
        this.pages = pages;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }



    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Users{" +
                "userId=" + userId +
                ", userName='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +

                ", status='" + status + '\'' +
                '}';
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Pages> getPages() {
        return null;
    }

    public void setPages(List<Pages> pages) {
        this.pages = pages;
    }
}
