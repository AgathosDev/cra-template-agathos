import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import './styles.scss';

import api from '../../services/api';

interface Dependencie {
  title: String;
  description: String;
  link: string;
}

const Home: React.FC = () => {
  const [dependencies, setDependencies] = useState<[Dependencie]>();

  useEffect(() => {
    const getDependencies = async () => {
      const { data } = await api.get('5e83d5f83000008400cf4019');

      setDependencies(data);
    };

    getDependencies();
  }, []);

  return (
    <>
      <header>
        <div>
          <h1>Agathos</h1>
          <p>template for create react app</p>
        </div>
      </header>
      <main>
        <section>
          <h2>dependencies</h2>
          <div>
            {dependencies?.map(dependencie => (
              <div className="card">
                <div>
                  <h3>{dependencie.title}</h3>
                  <p>{dependencie.description}</p>
                </div>
                <a href={dependencie.link} target="_blank" rel="noopener noreferrer">
                  Acesse <FiChevronRight />
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
