import moment from 'moment';
import { MenuItem } from 'primereact/menuitem';
import { number } from 'yargs';
import { DateRange, FilterDropdownOptionsTypes } from '../../../../Components';
import rowData from './OpportunityCardGrid/OpportunityCardGrid';
// import { dateFormat } from '../../../../Utils';
// var localTime = moment().format('YYYY-MM-DD'); // store localTime
// var proposedDate = localTime + 'T00:00:00.000Z';
const dateFormat = 'yyyy-MM-DDTHH:mm:ss.SSSZ'; // '2020-02-06T00:00:00.000Z';
export const allSignOptions: MenuItem[] = [
  { label: '=', value: '=' },
  { label: '<', value: '<' },
  { label: '>', value: '>' },
  { label: '<>', value: '<>' },
  { label: '<=', value: '<=' },
  { label: '>=', value: '>=' },
];
export const limitedSignOptions: MenuItem[] = [
  { label: '=', value: '=' },
  { label: '<>', value: '<>' },
];

const todayDate = moment().format(dateFormat);
const currentYear = moment(todayDate).get('year');
const currentYearStartDate = `01-Jan-${currentYear}`;

const getCalendarYear = () => {
  let yearsConfig: MenuItem[] = [];
  for (let i = Number(currentYear); i > Number(currentYear) - 3; i--) {
    const startDate = moment(`01-Jan-${i}`).format(dateFormat);
    const endDate = moment(`31-Dec-${i}`).format(dateFormat);
    yearsConfig = [
      ...yearsConfig,
      {
        label: i.toString(),
        value: i.toString(),
        payloadValue: `${startDate},${endDate}`,
      },
    ];
  }
  return yearsConfig;
};

const getMonths = () => {
  let monthsConfig: MenuItem[] = [];
  for (let i = 0; i < 12; i++) {
    const tempMonth = moment().subtract(i, 'M');
    const currentYearValue = tempMonth.get('year');
    const currentMonthFull = tempMonth.format('MMMM');
    const lastDayOfMonth = tempMonth.daysInMonth();
    const startDate = moment(`01-${currentMonthFull}-${currentYearValue}`).format(dateFormat);
    const endDate = moment(`${lastDayOfMonth}-${currentMonthFull}-${currentYearValue}`).format(
      dateFormat
    );
    monthsConfig = [
      ...monthsConfig,
      {
        label: `${currentMonthFull} ${currentYearValue}`,
        value: `${currentMonthFull} ${currentYearValue}`,
        payloadValue: `${startDate},${endDate}`,
      },
    ];
  }
  return monthsConfig;
};
const getQuarters = () => {
  let quartersConfig: MenuItem[] = [];
  for (let i = 0; i < 4; i++) {
    const tempQuarter = moment().subtract(i, 'quarter');
    const currentYearValue = tempQuarter.get('year');
    const currentQuarter = tempQuarter.quarter();
    const startDate = tempQuarter.startOf('quarter').format(dateFormat);
    const endDate = tempQuarter.endOf('quarter').format(dateFormat);
    quartersConfig = [
      ...quartersConfig,
      {
        label: `Q${currentQuarter} ${currentYearValue}`,
        value: `Q${currentQuarter} ${currentYearValue}`,
        payloadValue: `${startDate},${endDate}`,
      },
    ];
  }
  return quartersConfig;
};

export const criteriaDaysOptions: MenuItem[] = [
  {
    label: 'Today',
    value: 'Today',
    payloadValue: `${todayDate},${todayDate}`,
    id: 1,
  },
  {
    label: 'Yesterday',
    value: 'Yesterday',
    payloadValue: `${moment(todayDate).subtract(1, 'd').format(dateFormat)},${todayDate}`,
    id: 2,
  },
  {
    label: 'Last 7 days',
    value: 'Last 7 days',
    payloadValue: `${moment(todayDate).subtract(7, 'd').format(dateFormat)},${todayDate}`,
    id: 3,
  },
  {
    label: 'Last 30 days',
    value: 'Last 30 days',
    payloadValue: `${moment(todayDate).subtract(30, 'd').format(dateFormat)},${todayDate}`,
    id: 4,
  },
  {
    label: 'Last 3 months',
    value: 'Last 3 months',
    payloadValue: `${moment(todayDate).subtract(3, 'M').format(dateFormat)},${todayDate}`,
    id: 5,
  },
  {
    label: 'Last 6 months',
    value: 'Last 6 months',
    payloadValue: `${moment(todayDate).subtract(6, 'M').format(dateFormat)},${todayDate}`,
    id: 6,
  },
  {
    label: 'YTD',
    value: 'YTD',
    payloadValue: `${moment(currentYearStartDate).format(dateFormat)},${todayDate}`,
    id: 7,
  },
  {
    label: 'Specific date or range',
    items: [
      {
        template: (props: {
          updateDateFieldRange(
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
            value: { readonly fromDate: string; readonly toDate: string }
          ): void;
        }) => {
          return <DateRange updateDateFieldRange={props.updateDateFieldRange} />;
        },
      },
    ],
    id: 8,
  },
  {
    separator: true,
    id: 9,
  },
  {
    label: 'Calendar Year',
    items: getCalendarYear(),
    id: 10,
  },
  {
    label: 'Calendar Quarter',
    items: getQuarters(),
    id: 11,
  },
  {
    label: 'Month',
    items: getMonths(),
    id: 12,
  },
];
export const dateOptions: MenuItem[] = [
  {
    label: 'Today',
    value: 'Today',
    payloadValue: `${todayDate},${todayDate}`,
    id: 1,
  },
  {
    label: 'Yesterday',
    value: 'Yesterday',
    payloadValue: `${moment(todayDate).subtract(1, 'd').format(dateFormat)},${todayDate}`,
    id: 2,
  },
  {
    label: 'Last 7 days',
    value: 'Last 7 days',
    payloadValue: `${moment(todayDate).subtract(7, 'd').format(dateFormat)},${todayDate}`,
    id: 3,
  },
  {
    label: 'Last 30 days',
    value: 'Last 30 days',
    payloadValue: `${moment(todayDate).subtract(30, 'd').format(dateFormat)},${todayDate}`,
    id: 4,
  },
  {
    label: 'Last 3 months',
    value: 'Last 3 months',
    payloadValue: `${moment(todayDate).subtract(3, 'M').format(dateFormat)},${todayDate}`,
    id: 5,
  },
  {
    label: 'Last 6 months',
    value: 'Last 6 months',
    payloadValue: `${moment(todayDate).subtract(6, 'M').format(dateFormat)},${todayDate}`,
    id: 6,
  },
  {
    label: 'Year to Date',
    value: 'Year to Date',
    payloadValue: `${moment(currentYearStartDate).format(dateFormat)},${todayDate}`,
    id: 7,
  },
  {
    value: 'Fiscal Year to Date',
    payloadValue: `${moment(currentYearStartDate).format(dateFormat)},${todayDate}`,
    id: 8,
    label: 'Fiscal Year to Date',
  },
  // {
  //   label: 'Specific date or range',
  //   items: [
  //     {
  //       template: (props: {
  //         updateDateFieldRange(
  //           e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //           value: { readonly fromDate: string; readonly toDate: string }
  //         ): void;
  //       }) => {
  //         return <DateRange updateDateFieldRange={props.updateDateFieldRange} />;
  //       },
  //     },
  //   ],
  //   id: 9,
  // },
  {
    separator: true,
    id: 10,
  },
  {
    label: 'Calendar Year',
    items: getCalendarYear(),
    id: 11,
  },
  {
    separator: true,
    id: 12,
  },
  {
    label: 'Calendar Quarter',
    items: getQuarters(),
    id: 13,
  },
  // {
  //   label: 'Month',
  //   items: getMonths(),
  //   id: 13,
  // },
];
export const criteriaStatuses: MenuItem[] = [
  {
    label: 'Pending',
    value: 'Pending',
  },
  {
    label: 'Approved',
    value: 'Approved',
  },
  {
    label: 'Discarded',
    value: 'Discarded',
  },
];
export const criteriaSites: MenuItem[] = [
  {
    label: 'Urgent care in Boston',
    value: 'Urgent care in Boston',
  },
  {
    label: 'Urgent care in Needham',
    value: 'Urgent care in Needham',
  },
];
const criteriaCategories: MenuItem[] = [
  {
    label: 'CC Overstated',
    items: [
      {
        label: 'Missing Initial Assessment',
        value: 'Missing Initial Assessment',
      },
      {
        label: 'Missing Signature',
        value: 'Missing Signature',
      },
      {
        label: 'Past Family and Social History',
        value: 'Past Family and Social History',
      },
      {
        label: 'Potential Critical Care-missing critical care statement',
        value: 'Potential Critical Care-missing critical care statement',
      },
      {
        label: 'Review of Systems',
        value: 'Review of Systems',
      },
    ],
  },
];
const criteriaDepartments: MenuItem[] = [
  {
    label: 'Urgent care in Boston',
    items: [
      {
        label: 'Anesthesia, Critical Care and Pain Medicine',
        value: 'Anesthesia, Critical Care and Pain Medicine',
      },
      {
        label: 'Endoscopy and Infusion Center',
        value: 'Endoscopy and Infusion Center',
      },
    ],
  },
  {
    label: 'Urgent care in Needham',
    items: [
      {
        label: 'Anesthesia, Critical Care and Pain Medicine',
        value: 'Anesthesia, Critical Care and Pain Medicine',
      },
    ],
  },
];

export const filterDropdownOptions: FilterDropdownOptionsTypes[] = [
  {
    label: 'DOS',
    value: 'DOS',
    signOptions: allSignOptions,
    criteriaOptions: criteriaDaysOptions,
  },
  {
    label: 'Last Modified',
    value: 'actionDate',
    signOptions: allSignOptions,
    criteriaOptions: criteriaDaysOptions,
  },
  // {
  //   label: 'Status',
  //   value: 'Status',
  //   signOptions: limitedSignOptions,
  //   criteriaOptions: criteriaStatuses,
  // },
  {
    label: 'Category',
    value: 'Category',
    signOptions: limitedSignOptions,
    criteriaOptions: criteriaCategories,
    isSubmenuForCriteriaAvailable: true,
  },
  {
    label: 'Site',
    value: 'Site',
    signOptions: limitedSignOptions,
    criteriaOptions: criteriaSites,
  },
  {
    label: 'Department',
    value: 'Department',
    signOptions: limitedSignOptions,
    criteriaOptions: criteriaDepartments,
    isSubmenuForCriteriaAvailable: true,
  },
  // {
  //   label: 'CPT',
  //   value: 'CPT',
  //   signOptions: limitedSignOptions,
  //   criteriaOptions: criteriaDepartments,
  //   isSubmenuForCriteriaAvailable: true,
  // },
  {
    label: 'wRVU',
    value: 'workRvu',
    signOptions: limitedSignOptions,
    // criteriaOptions: [],
    isInputOnlyCriteria: true,
    // isSubmenuForCriteriaAvailable: true,
  },
  {
    label: 'Revenue',
    value: 'revenuImpactAmount',
    signOptions: limitedSignOptions,
    isInputOnlyCriteria: true,
    // criteriaOptions: criteriaDepartments,
    // isSubmenuForCriteriaAvailable: true,
  },
];
export const GetWhereValue = (singleField: any) => {
  const value = singleField.criteriaPayloadValue
    ? singleField.criteriaPayloadValue
    : Number(singleField.criteriaValue);
  switch (singleField.signValue) {
    case '=':
      return typeof value === 'string' &&
        value?.split(',') &&
        value?.split(',')[1] &&
        value?.split(',')[1]
        ? {
            gte: value?.split(',')[0],
            lte: value?.split(',')[1],
          }
        : { eq: value };
    case '<':
      return {
        gt: value?.split(',')[0],
      };
    case '>':
      return {
        lt: value?.split(',')[0],
      };
    case '<>':
      return {
        lt: value?.split(',')[0],
        gt: value?.split(',')[1],
      };
    case '<=':
      return {
        gte: value?.split(',')[0],
      };
    case '>=':
      return {
        lte: value?.split(',')[0],
      };
  }
};
export const getFiltervaluesForReactDtatGrid = (singleField: any) => {
  const type = singleField.type;
  const value =
    type === 'date'
      ? typeof singleField.value === 'object'
        ? {
            start: singleField.value.start
              ? moment(singleField.value.start).format(dateFormat)
              : '',
            end: singleField.value.end ? moment(singleField.value.end).format(dateFormat) : '',
          }
        : moment(singleField.value).format(dateFormat)
      : type === 'number'
      ? Number(singleField.value)
      : singleField.value;
  switch (singleField.operator) {
    case 'eq':
      return { eq: value };
    case 'neq':
      return {
        neq: value,
      };
    case 'contains':
      return {
        contains: value,
      };
    case 'notContains':
      return {
        ncontains: value,
      };
    case 'startsWith':
      return {
        startsWith: value,
      };
    case 'endsWith':
      return {
        endsWith: value,
      };
    case 'empty':
      return {
        eq: value,
      };
    case 'notEmpty':
      return {
        neq: value,
      };
    case 'after':
      return {
        gte: value,
      };
    case 'afterOrOn':
      return {
        gte: value,
        eq: value,
      };
    case 'before':
      return {
        lte: value,
      };
    case 'beforeOrOn':
      return {
        lte: value,
        eq: value,
      };
    case 'inrange':
      const data: rowData = {};
      if (value.start) {
        data.gte = value.start;
      }
      if (value.end) {
        data.lte = value.end;
      }
      return data;
    case 'gt':
      return {
        gt: value,
      };
    case 'gte':
      return {
        gte: value,
      };
    case 'lt':
      return {
        lt: value,
      };
    case 'lte':
      return {
        lte: value,
      };
    case 'notinrange':
      const data1: rowData = {};
      if (value.start) {
        data1.lte = value.start;
      }
      if (value.end) {
        data1.gte = value.end;
      }
      return data1;
  }
};
