import { defaultProps } from '@blocknote/core';
import { createReactBlockSpec } from '@blocknote/react';
import { Menu } from '@mantine/core';

import { InformationCircleIcon } from '@heroicons/react/24/outline';

// The types of alerts that users can choose from.
export const alertTypes = [
  {
    title: 'Warning',
    value: 'warning',
    icon: <InformationCircleIcon className="w-5 h-5" />,
    color: '#e69819',
    backgroundColor: {
      light: '#fff6e6',
      dark: '#805d20',
    },
  },
  {
    title: 'Error',
    value: 'error',
    icon: <InformationCircleIcon className="w-5 h-5" />,
    color: '#d80d0d',
    backgroundColor: {
      light: '#ffe6e6',
      dark: '#802020',
    },
  },
  {
    title: 'Info',
    value: 'info',
    icon: <InformationCircleIcon className="w-5 h-5" />,
    color: '#507aff',
    backgroundColor: {
      light: '#e6ebff',
      dark: '#203380',
    },
  },
  {
    title: 'Success',
    value: 'success',
    icon: <InformationCircleIcon className="w-5 h-5" />,
    color: '#0bc10b',
    backgroundColor: {
      light: '#e6ffe6',
      dark: '#208020',
    },
  },
] as const;

// The Alert block.
export const Alert = createReactBlockSpec(
  {
    type: 'alert',
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
      type: {
        default: 'warning',
        values: ['warning', 'error', 'info', 'success'],
      },
    },
    content: 'inline',
  },
  {
    render: (props) => {
      const alertType = alertTypes.find(
        (a) => a.value === props.block.props.type,
      )!;
      const icon = alertType.icon;
      return (
        <div className={'alert'} data-alert-type={props.block.props.type}>
          {/*Icon which opens a menu to choose the Alert type*/}
          <Menu withinPortal={false} zIndex={999999}>
            <Menu.Target>
              <div className={'alert-icon-wrapper'} contentEditable={false}>
                {icon}
              </div>
            </Menu.Target>
            {/*Dropdown to change the Alert type*/}
            <Menu.Dropdown>
              <Menu.Label>Alert Type</Menu.Label>
              <Menu.Divider />
              {alertTypes.map((type) => {
                const itemIcon = type.icon;

                return (
                  <Menu.Item
                    key={type.value}
                    leftSection={itemIcon}
                    onClick={() =>
                      props.editor.updateBlock(props.block, {
                        type: 'alert',
                        props: { type: type.value },
                      })
                    }
                  >
                    {type.title}
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
          {/*Rich text field for user to type in*/}
          <div className={'inline-content'} ref={props.contentRef} />
        </div>
      );
    },
  },
);
