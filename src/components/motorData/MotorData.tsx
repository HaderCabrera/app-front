"use client";
import { useState, useEffect } from "react";

// Tipo para las lecturas de motor
interface MotorReading {
  id: number;
  name: string;
  power: string;
  temperature: string;
  airTemp: string;
  status: string;
  lastUpdate: string;
}


interface MotorData {
  MEASURE_TIMESTAMP_TZ_CO_1MIN: string;
  GENERATOR_POWER: string;
  [key: string]: string; 
}

const MotorData = () => {
  const [motorReadings, setMotorReadings] = useState<MotorReading[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Cargar los tres archivos CSV
        const [powerResponse, cylinderTempResponse, airTempResponse] = await Promise.all([
          fetch('/data/POWER.csv'),
          fetch('/data/CYLINDER TEMP.csv'),
          fetch('/data/AIR TEMP.csv')
        ]);

        // Verificar si las respuestas fueron exitosas
        if (!powerResponse.ok || !cylinderTempResponse.ok || !airTempResponse.ok) {
          throw new Error("Error al cargar los archivos CSV");
        }

        // Convertir las respuestas a texto
        const powerText = await powerResponse.text();
        const cylinderTempText = await cylinderTempResponse.text();
        const airTempText = await airTempResponse.text();

        // Procesar los datos CSV
        const powerData = parseCSV(powerText);
        const cylinderTempData = parseCSV(cylinderTempText);
        const airTempData = parseCSV(airTempText);

        // Combinar los datos para crear las lecturas de motor
        const combinedData = combineData(powerData, cylinderTempData, airTempData);

        setMotorReadings(combinedData);
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar los datos:", err);
        setError("Error al cargar los datos. Por favor, inténtelo de nuevo más tarde.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Función para parsear CSV
  const parseCSV = (csvText: string): MotorData[] => {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
      const values = line.split(',');
      const entry: MotorData = {
        MEASURE_TIMESTAMP_TZ_CO_1MIN: "",
        GENERATOR_POWER: ""
      };

      headers.forEach((header, index) => {
        entry[header] = values[index];
      });

      return entry;
    });
  };

  // Función para combinar los datos de los tres archivos
  const combineData = (powerData: MotorData[], cylinderTempData: MotorData[], airTempData: MotorData[]): MotorReading[] => {
    const recentPowerData = powerData.slice(0, 3);
    const recentCylinderTempData = cylinderTempData.slice(0, 3);
    const recentAirTempData = airTempData.slice(0, 3);

    return recentPowerData.map((power, index) => {
      const cylinderTemp = recentCylinderTempData[index] || {};
      const airTemp = recentAirTempData[index] || {};

      // Calcular temperatura promedio de cilindros
      const cylinderTemps = Object.entries(cylinderTemp)
        .filter(([key]) => key.startsWith('TEMP_CYLINDER_'))
        .map(([_, value]) => parseFloat(value));

      const avgCylinderTemp = cylinderTemps.length
        ? Math.round(cylinderTemps.reduce((sum, temp) => sum + temp, 0) / cylinderTemps.length)
        : 0;

      // Determinar el estado basado en las temperaturas
      let status = "Normal";
      if (avgCylinderTemp > 535) {
        status = "Crítico";
      } else if (avgCylinderTemp > 530) {
        status = "Advertencia";
      }

      // Formatear la fecha y hora
      const timestamp = power.MEASURE_TIMESTAMP_TZ_CO_1MIN;
      const date = new Date(timestamp);
      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

      return {
        id: index + 1,
        name: `Motor ${index + 1}`,
        power: `${power.GENERATOR_POWER} kW`,
        temperature: `${avgCylinderTemp}°C`,
        airTemp: `${airTemp.INTAKE_AIR_TEMP}°C`,
        status: status,
        lastUpdate: formattedDate
      };
    });
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Normal":
        return "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300";
      case "Advertencia":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300";
      case "Crítico":
        return "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300";
    }
  };

  const getTemperatureColor = (temp: string): string => {
    const temperature = parseInt(temp);
    if (temperature >= 535) return "text-red-600 dark:text-red-400";
    if (temperature >= 530) return "text-yellow-600 dark:text-yellow-400";
    return "text-green-600 dark:text-green-400";
  };

  if (loading) {
    return (
      <div className="p-4 text-center">
        <p>Cargando datos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden shadow-sm rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Motor
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Potencia
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Temp. Cilindros
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Temp. Aire
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Estado
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Última Actualización
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {motorReadings.map((motor) => (
              <tr key={motor.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{motor.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-100">{motor.power}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-semibold ${getTemperatureColor(motor.temperature)}`}>
                    {motor.temperature}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-100">{motor.airTemp}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(motor.status)}`}>
                    {motor.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {motor.lastUpdate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MotorData;