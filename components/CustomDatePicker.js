import { Image, StyleSheet, TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import React, { useState } from "react";
import moment from "moment";

import CustomText from "./CustomText";

const CustomDatePicker = ({
  value,
  setValue,
  error,
  withLabel,
  labelColor,
  placeholder = "Date",
  type = "date",
}) => {
  const [isModal, setModal] = useState(false);
  return (
    <>
      {withLabel && (
        <CustomText
        fontSize={12}
          label={withLabel}
          marginBottom={6}
          color={'black'}
        />
      )}
       
      <TouchableOpacity
        onPress={() => setModal(true)}
        style={[
          styles.mainContainer,
          {
            marginBottom: error ? 5 :0,
            borderColor: error ? 'red' : "#E1E4EA",
          },
        ]}
      >
       <Image
          source={require('../assets/auth/calendar.png')}
          style={styles.leftIcon}
        />
        <CustomText
          label={
            value
              ? moment(value).format(type == "date" ? "DD/MM/YYYY" : "h:mm A")
              : placeholder
          }
          color={'black'}
          style={styles.textInput}
        />
        
      </TouchableOpacity>
      {error && (
        <CustomText
          label={error}
          color={'red'}
          fontFamily={fonts.semiBold}
          fontSize={10}
          marginBottom={15}
        />
      )}
      {isModal && (
        <DatePicker
          modal
          open={isModal}
          date={value || new Date()}
          onConfirm={(date) => {
            setValue(date);
            setModal(false);
          }}
          onCancel={() => {
            setModal(false);
          }}
          mode={type}
        />
      )}
    </>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 48,
    width: "100%",
    borderRadius: 12,
    backgroundColor: "white",
    borderWidth: 1,
  },
  leftIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
});