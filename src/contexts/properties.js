import React, { createContext, useState, useCallback } from 'react';
import { propertiesRequest } from '../api/kaycash/properties/properties.request';

const PropertiesContext = createContext({});

export const PropertiesProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [filterPropertie, setFilterProperties] = useState('');
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);

  const getProperties = useCallback(async (nameFilter) => {
    try {
      setLoading(true)
      setError(false);
      const response = await propertiesRequest();
      const responsePublished = response.data.filter(item => item.publish);
      if (nameFilter == 'parking') {
        setLoading(false)
        return setProperties(responsePublished.sort((a,b) => a.parkingSpaces < b.parkingSpaces ? 1 : -1));
        
      }
      if (nameFilter == 'price') {
        setLoading(false)
        return setProperties(responsePublished.sort((a,b) => a.price < b.price ? 1 : -1));
      }
      if (nameFilter == 'bedrooms') {
        setLoading(false)
        return setProperties(responsePublished.sort((a,b) => a.bedrooms < b.bedrooms ? 1 : -1));
      }
      if (nameFilter == 'bathrooms') {
        setLoading(false)
        return setProperties(responsePublished.sort((a,b) => a.bathrooms < b.bathrooms ? 1 : -1));
      }
      
    } catch (err) {
      Alert.alert('Algo deu errado', 'Tente novamente mais tarde');
      console.log('erro gerando', err)
      setError(true);
    }
  }, []);

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        getProperties,
        loading
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesContext;
