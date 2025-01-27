// src/components/Navbar.jsx
const Navbar = () => {
    return (
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Sneakers Store</h1>
        <ul style={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    );
  };
  
  // Inline styles for the navbar (you can move these to a separate CSS file later)
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: '10px 20px',
    },
    logo: {
      color: '#fff',
      fontSize: '24px',
    },
    navLinks: {
      listStyleType: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    },
    navLinksItem: {
      margin: '0 10px',
    },
  };
  
  export default Navbar;
  