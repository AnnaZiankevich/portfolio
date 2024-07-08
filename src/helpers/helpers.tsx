import React from 'react';
import { differenceInMonths, parse } from 'date-fns';
import { log } from 'console';

type Period = {
    start: string;
    end: string;
};

type ExperienceCalculatorProps = {
  periods: Period[];
};

export const currentYear = new Date().getFullYear();

const getDeclension = (number: number, singular: string, few: string, many: string): string => {
    const mod10 = number % 10;
    const mod100 = number % 100;
  
    if (mod10 === 1 && mod100 !== 11) {
      return singular;
    } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
      return few;
    } else {
      return many;
    }
};

export const ExperienceCalculator: React.FC<ExperienceCalculatorProps> = ({ periods }) => {
    const calculateTotalExperience = (periods: Period[]): number => {
      let totalMonths = 0;
  
      periods.forEach(period => {
        const startDate = parse(period.start, 'yyyy-MM', new Date());
        const endDate = period.end === 'сейчас' ? new Date() : parse(period.end, 'yyyy-MM', new Date());
        totalMonths += differenceInMonths(endDate, startDate);
      });
  
      return totalMonths;
    };
  
    const totalExperience = calculateTotalExperience(periods);
    const years = Math.floor(totalExperience / 12);
    const months = totalExperience % 12;
  
    const yearWord = getDeclension(years, 'год', 'года', 'лет');
    const monthWord = getDeclension(months, 'месяц', 'месяца', 'месяцев');
  
    return (
        <div>{years} {yearWord} {months <= 0 ? '' : `и ${months} ${monthWord}`}</div>
    );
};