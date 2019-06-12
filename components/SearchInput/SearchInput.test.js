import React from 'react';
import { TextInput } from 'react-native';

import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import SearchInput from './SearchInput';




describe('<SearchInput />', () => {
    // Initialize Adapter for Enzyme ..
    configure({ adapter: new Adapter() });

  it('should render One <TextInput /> components', () => {
    const wrapper = shallow(
        <SearchInput 
            placeholder={'Search any City'}
            onSubmit={() => { } }
        />);
    expect(wrapper.find(TextInput).length).toEqual(1);
  });

  it('should change the text state on onInput', async () => {
    const wrapper = shallow(
        <SearchInput 
            placeholder={'Search any City'}
            onSubmit={() => { } }
        />);
        await wrapper.instance().handleChangeText('Dublin');
        expect(wrapper.state('text')).toEqual('Dublin');
  });

  it('should call the onSubmit function if something is in the textBox', async () => {
    ll = '';
    const wrapper = shallow(
        <SearchInput 
            placeholder={'Search any City'}
            onSubmit={(text) => { ll = text; } }
        />);

        wrapper.setState({ text: 'Dublin' });


        await wrapper.instance().handleSubmitEditing();
        expect(ll).toEqual('Dublin');

  });


  it('should empty the textbox after calling the property function', async () => {
    const wrapper = shallow(
        <SearchInput 
            placeholder={'Search any City'}
            onSubmit={(text) => { ll = text; } }
        />);

        wrapper.setState({ text: 'Dublin' });


        await wrapper.instance().handleSubmitEditing();
        expect(wrapper.state('text')).toEqual('');

  });

  it('should NOT call the onSubmit function if something is in the textBox', async () => {
    ll = '';
    const wrapper = shallow(
        <SearchInput 
            placeholder={'Search any City'}
            onSubmit={(text) => { ll = text; } }
        />);

        await wrapper.instance().handleSubmitEditing();
        expect(ll).toEqual('');

  });

});