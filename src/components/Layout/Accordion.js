import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { scale } from 'react-native-size-matters';
import Colors from 'themes/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../Card';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: scale(14),
  },
  content: {
    padding: scale(14),
  },
  opened: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray10,
  },
});

const Accordion = ({ title, children, isCategory, changeCategory, categoryId, categorys, idCategorySelected }) => {
  const [isOpened, setOpen] = useState(false);

  return (
    <Card>

      {
        isCategory ? (
          <TouchableOpacity 
            onPress={() => {
              setOpen(!isOpened)
              changeCategory(categoryId, categorys)
            }}>
            <View style={[
              styles.container,
              isOpened && styles.opened,
            ]}
            >
              <Text style={{color: '#141a2f'}} weight="medium" flex>{title}</Text>
              <Icon
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                size={scale(20)}
                color={Colors.gray50}
              />
          </View>
      </TouchableOpacity>
        ) :
        (
          <TouchableOpacity onPress={() => setOpen(!isOpened)}>
            <View style={[
              styles.container,
              isOpened && styles.opened,
            ]}
            >
              <Text style={{color: '#141a2f'}} weight="medium" flex>{title}</Text>
              <Icon
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                size={scale(20)}
                color={Colors.gray50}
              />
          </View>
      </TouchableOpacity>
        )
      }
      


      {(isOpened && categoryId == idCategorySelected) &&(
        <View style={styles.content}>
          {children}
        </View>
      )}
    </Card>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;
