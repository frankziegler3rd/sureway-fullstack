import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class RegisterDao {
	
	private String dbUrl = "jdbc:mysql://localhost:3306/userdb";	//URL to the Database
	private String dbUname = "root";
	private String dbPassword = "rootpassword";
	private String dbDriver = "com.mysql.cj.jdbc.Driver";  //  Driver to use
	
	//Loads up the JDBC driver for ability to interact with the Database
	public void loadDriver(String dbDriver) {
		try {
			Class.forName(dbDriver);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//Establishes a connection with the database and saves in a Connection object.
	public Connection getConnection() {
		Connection con = null;
		try {
			con = DriverManager.getConnection(dbUrl,dbUname,dbPassword);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return con;
	}
	
	// Insert new member into the database
	public String insert(Member member){
		
		loadDriver(dbDriver);
		Connection con = getConnection();
		String result = "Data Submitted";
		String sql = "INSERT INTO account values(?,?)";	// The SQL Query given to the database
		
		PreparedStatement ps;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, member.getUname());
			ps.setString(2, member.getPword());
			ps.executeUpdate();
		} catch (SQLException e) {	
			// If the data can not be stored succesfully in the database.
			e.printStackTrace();
			result = "Error storing data";
			
		}
		return result;
		
	}
}
