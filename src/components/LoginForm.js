import React, { useState } from 'react';

const LoginForm = () => {
  const [form, setForm] = useState({ username: '', password: '', city: '', server: '', role: '', singleSignOn: [] });

  const servers = ['Server A', 'Server B', 'Server C'];
  const roles = ['Admin', 'Engineer', 'Manager', 'Guest'];
  const ssoOptions = ['Mail', 'Payroll', 'Self-service'];

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm(({ singleSignOn }) => {
        const next = checked ? [...singleSignOn, value] : singleSignOn.filter(v => v !== value);
        return { ...form, singleSignOn: next };
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleReset = () => {
    setForm({ username: '', password: '', city: '', server: '', role: '', singleSignOn: [] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form data:', form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
      <div>
        <label>Username: <input name="username" value={form.username} onChange={handleChange} /></label>
      </div>
      <div>
        <label>Password: <input name="password" type="password" value={form.password} onChange={handleChange} /></label>
      </div>
      <div>
        <label>City of Employment: <input name="city" value={form.city} onChange={handleChange} /></label>
      </div>
      <div>
        <label>Web server: 
          <select name="server" value={form.server} onChange={handleChange}>
            <option value="">-- Choose a server --</option>
            {servers.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
      </div>
      <div>
        <p>Please specify your role:</p>
        {roles.map(r => (
          <label key={r} style={{ marginRight: '10px' }}>
            <input type="radio" name="role" value={r} checked={form.role === r} onChange={handleChange} /> {r}
          </label>
        ))}
      </div>
      <div>
        <p>Single Sign-on to the following:</p>
        {ssoOptions.map(opt => (
          <label key={opt} style={{ display: 'block' }}>
            <input type="checkbox" name="singleSignOn" value={opt} checked={form.singleSignOn.includes(opt)} onChange={handleChange} /> {opt}
          </label>
        ))}
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={handleReset} style={{ marginLeft: '10px' }}>Reset</button>
    </form>
  );
};

export default LoginForm;
