"use client";

import MotorData from "@/components/motorData/MotorData";
import { useState, useEffect } from "react";

interface SummaryData {
  activeMotors: string;
  avgTemperature: string;
  avgPower: string;
  alerts: string;
}

export default function DashboardPage() {
  const [summaryData, setSummaryData] = useState<SummaryData>({
    activeMotors: "0/3",
    avgTemperature: "0°C",
    avgPower: "0 kW",
    alerts: "0",
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadSummaryData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSummaryData({
          activeMotors: "3/3",
          avgTemperature: "532°C",
          avgPower: "1151 kW",
          alerts: "1",
        });

        setIsLoading(false);
      } catch (error) {
        console.error("Error cargando resumen:", error);
        setIsLoading(false);
      }
    };

    loadSummaryData();
  }, []);

  interface SummaryCard {
    title: string;
    value: string;
    icon: string;
    color: string;
  }

  const summaryCards: SummaryCard[] = [
    { title: "Motores Activos", value: summaryData.activeMotors, icon: "⚙️", color: "bg-blue-500" },
    { title: "Temperatura Promedio", value: summaryData.avgTemperature, icon: "🌡️", color: "bg-orange-500" },
    { title: "Potencia Promedio", value: summaryData.avgPower, icon: "⚡", color: "bg-green-500" },
    { title: "Alertas", value: summaryData.alerts, icon: "⚠️", color: "bg-yellow-500" },
  ];

  return (
    <div className="px-4 sm:px-6 py-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">Dashboard</h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">Monitoreo de Motores y Sistemas</p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {summaryCards.map((card, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex items-center">
                <div className={`${card.color} rounded-md p-2 sm:p-3 text-white mr-3 sm:mr-4`}>
                  <span className="text-xl sm:text-2xl">{card.icon}</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{card.title}</p>
                  {isLoading ? (
                    <div className="h-6 sm:h-8 w-16 sm:w-24 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
                  ) : (
                    <p className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{card.value}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Motor Data Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 sm:mb-0">Lecturas de Motores</h2>
            <div className="flex space-x-2">
              <button className="px-3 sm:px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Refrescar
              </button>
              <button className="px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Ver Histórico
              </button>
            </div>
          </div>
          <MotorData />
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Últimas Alertas</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-800/20 p-3 sm:p-4">
                <p className="text-sm text-yellow-700 dark:text-yellow-300">Motor 1 - Temperatura alta (532°C)</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Hoy 14:25</p>
              </div>
              <div className="border-l-4 border-green-400 bg-green-50 dark:bg-green-800/20 p-3 sm:p-4">
                <p className="text-sm text-green-700 dark:text-green-300">Mantenimiento programado - Motor 3</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Mañana 09:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Rendimiento del Sistema</h2>
            <div className="space-y-4">
            <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Carga de Potencia</span>
                  <span className="text-sm font-medium text-gray-700">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Eficiencia</span>
                  <span className="text-sm font-medium text-gray-700">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "87%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Uso de Combustible</span>
                  <span className="text-sm font-medium text-gray-700">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}